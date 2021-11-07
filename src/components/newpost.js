import React from 'react';
import './posts.css'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "@reach/router";
export default class FormSubmission extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      username:"",
      content:""
    }
  }

  handleInputChanged(event) {
    this.setState({
      title: event.target.value
    });
  }
  handleInputChanged1(event) {
    this.setState({
      username: event.target.value
    });
  }
  handleInputChanged2(event) {
    this.setState({
      content: event.target.value
    });
  }

  handleButtonClicked() {
    const title=this.state.title;
    const username=this.state.username;
    const content=this.state.content;
    if(title.length==0 || username.length==0 || content.length==0)
    {
        toast('Enter all the details properly to add a new post');
    }
    else{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' },
            body: JSON.stringify({ title: title,username:username,content:content }),
            mode: "no-cors",
        };
        fetch('https://saveposts.vk2200.workers.dev/', requestOptions)
            .then(response => {toast('Success');setTimeout(
                function() {
                    window.location.reload(false);
                }, 3000);}).catch(err => {
                toast('Error');
              });
    }
  }

  render() {
    toast.configure();
    return  (
        <div class="center">
        <h6 class="te">New Post</h6>
      <label class="te" for="fname">Title : </label>
  <input type="text" id="fname" name="fname" value={this.state.title} onChange={this.handleInputChanged.bind(this)}></input>
  <br></br>
  <label class="te" for="lname">Username : </label>
  <input type="text" id="lname" name="lname" value={this.state.username} onChange={this.handleInputChanged1.bind(this)}></input>
  <br></br>
  <label class="te" for="lname">Content : </label>
  <input type="text" id="content" name="content" value={this.state.content} onChange={this.handleInputChanged2.bind(this)}></input>
  <br></br>
  <br></br>
  <input class="te" type="submit" value="Submit" onClick={this.handleButtonClicked.bind(this)}></input>
  <Link to="/">Go back to home page</Link>
    </div>
    );
  }
}