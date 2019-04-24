import React from "react";

import { View, Text, Button } from "react-native";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../src/store/actions";

const TodoList = ({ todos, addTodo }) => (
  <View>
    {todos.map(todo => (
      <Text key={todo.id}>{todo.text}</Text>
    ))}

    <Button title="Add Todo" onPress={addTodo} />
  </View>
);

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
