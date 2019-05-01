const getCurrentDate = () =>{
    const date = new Date();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    this.setState({currentDate: ` ${date.getDate()} ${months[date.getMonth() - 1]}, ${date.getHours()}:${date.getMinutes()}`});
  }

  export default getCurrentDate;