import _ from 'lodash';
import React, {useEffect} from 'react';
import {FlatList, TouchableWithoutFeedback, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {employeesFetch} from '../actions';
import {CardSection} from './common';

const EmployeeList = ({ employeesFetch, employees }) => {
  useEffect(() => {
    employeesFetch();
  }, [employeesFetch]);

  const showList = () => {
    if (employees) {
      return (
        <FlatList
          data={employees}
          keyExtractor={item => item.uid}
          renderItem={({ item }) => {
              const onRowPress = () => {
                Actions.employeeEdit({ employee: item });
              };
            return (
              <TouchableWithoutFeedback onPress={onRowPress}>
                <View>
                  <CardSection>
                    <Text style={styles.titleStyle}>{item.name}</Text>
                  </CardSection>
                </View>
              </TouchableWithoutFeedback>
            );
          }}
        />
      );
    }

    return null;
  };

  return (
    <>
      {showList()}
    </>
  );
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return {...val, uid};
  });

  return { employees };
};

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);
