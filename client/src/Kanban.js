import React from "react";
import axios from "axios";
import { DragDropContext, DropTarget, DragSource } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import update from "immutability-helper";

const classes = {
  board: {
    display: "flex",
    margin: "0 auto",
    width: "90vw",
    fontFamily: 'Arial, "Helvetica Neue", sans-serif'
  },
  column: {
    minWidth: 200,
    width: "18vw",
    height: "80vh",
    margin: "0 auto",
    backgroundColor: "#FCC8B2"
  },
  columnHead: {
    textAlign: "center",
    padding: 10,
    fontSize: "1.2em",
    backgroundColor: "#C6D8AF"
  },
  item: {
    padding: 10,
    margin: 10,
    fontSize: "0.8em",
    cursor: "pointer",
    backgroundColor: "white"
  }
};

class Kanban extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      channels: []
    };
  }

  async componentDidMount() {
    try {
      const tasksResponse = await axios.get('http://localhost:5000/tasks/getAll');
      const channelsResponse = await axios.get('http://localhost:5000/channels/getAll');
      const tasks = tasksResponse.data;
      const channels = channelsResponse.data.map(channel => channel.name);

      this.setState({ tasks, channels });
    } catch (error) {
      console.error(error);
    }
  }

  update = (id, status) => {
    const { tasks } = this.state;
    const task = tasks.find(task => task._id === id);
    task.status = status;
    const taskIndex = tasks.indexOf(task);
    const newTasks = update(tasks, {
      [taskIndex]: { $set: task }
    });
    this.setState({ tasks: newTasks });
  };

  render() {
    const { tasks, channels } = this.state;
    const labelsMap = channels.reduce((map, channel) => {
      map[channel] = channel.charAt(0).toUpperCase() + channel.slice(1);
      return map;
    }, {});

    return (
      <main>
        <header> Kanban Board </header>
        <section style={classes.board}>
          {channels.map(channel => (
            <KanbanColumn status={channel}>
              <div style={classes.column}>
                <div style={classes.columnHead}>{labelsMap[channel]}</div>
                <div>
                  {tasks
                    .filter(item => item.status === channel)
                    .map(item => (
                      <KanbanItem id={item._id} onDrop={this.update}>
                        <div style={classes.item}>{item.title}</div>
                      </KanbanItem>
                    ))}
                </div>
              </div>
            </KanbanColumn>
          ))}
        </section>
      </main>
    );
  }
}

export default DragDropContext(HTML5Backend)(Kanban);

// Column

const boxTarget = {
  drop(props) {
    return { name: props.status };
  }
};

class KanbanColumn extends React.Component {
  render() {
    return this.props.connectDropTarget(<div>{this.props.children}</div>);
  }
}

KanbanColumn = DropTarget("kanbanItem", boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))(KanbanColumn);

// Item

const boxSource = {
  beginDrag(props) {
    return {
      name: props.id
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    if (dropResult) {
      props.onDrop(monitor.getItem().name, dropResult.name);
    }
  }
};

class KanbanItem extends React.Component {
  render() {
    return this.props.connectDragSource(<div>{this.props.children}</div>);
  }
}

KanbanItem = DragSource("kanbanItem", boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(KanbanItem);