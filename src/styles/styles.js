import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    width:'100%',
    marginBottom: 5,
    padding: 20,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center'
  },
  userDetails:{
    flex: 1,
    flexDirection: 'column',
    width: "70%"
  },
  placeButton:{
    padding:10,
    backgroundColor: 'black',
    borderRadius:5
  },
  emailStyling:{
    textAlign:'center',
    fontSize: 12
  },
  CenterAlign:{
    paddingBottom: 5,
    textAlign:'center'
  },
  buttonStyling:{
    color:'white'
  },
  listContainer:{
    width: '100%'
  },
  listHeight:{
    width: '100%'
  },
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titleView: {
    padding:20
  },
  titleText: {
    textAlign:'center',
    fontSize: 20
  }
});

export default styles