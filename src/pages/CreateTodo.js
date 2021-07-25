import React, { Component } from 'react'
import { Button, Form, Input } from 'semantic-ui-react'
import {NotificationManager} from 'react-notifications';
import axios from 'axios';

export default class CreateTodo extends Component{

    constructor(props){
        super(props)
        this.state = {
         
            loadingForm:false,
            name:'',
            subject:'Odia',
            gender:'Male',
            about:''
        }

        this.handleTextChnage = this.handleTextChnage.bind(this)
    }


    handleTextChnage(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = e => {

        this.setState({
            loadingForm:true
        })

        axios.post('http://localhost:5000/api/todo/store',this.state)
        .then(response => {
            console.log(response.data.response)
            if(response.data.response){

                this.setState({
                    loadingForm:false,
                    name:'',
                    subject:'Odia',
                    gender:'Male',
                    about:''
                })

                NotificationManager.success('Success');
                this.props.history.push('/todolist');

            }else{

                this.setState({
                    loadingForm:false
                })
                NotificationManager.warning('Failed')
            }

        })

    }

    render(){

        return(
             <>
             <h3>Create Todo</h3>
             <Form onSubmit={this.handleSubmit} loading={this.state.loadingForm}> 
                <Form.Field  control={Input}  label='Name' placeholder='Full Name' name='name' value={this.state.name} onChange={this.handleTxtChange} />
                
                <Form.Field label='Subject' control='select' name='subject' value={this.state.subject} onChange={this.handleTxtChange} >
                    <option value='Math'>Math</option>
                    <option value='English'>English</option>
                    <option value='Odia'>Odia</option>
                    <option value='Hindi'>Hindi</option>
                    <option value='History'>History</option>
                </Form.Field>
                 
                <Form.Group grouped>
                    <label>Gender</label>
                    <Form.Field
                        label='Male'
                        control='input'
                        type='radio'
                        name='gender'
                        value="Male"
                        checked={this.state.gender==='Male'?true:false}
                        onChange={this.handleTextChnage}
                    />
                    <Form.Field
                        label='Female'
                        control='input'
                        type='radio'
                        name='gender'
                        value="Female"
                        checked={this.state.gender==='Female'?true:false}
                        onChange={this.handleTextChnage}
                    />
                </Form.Group>

                <Form.Field label='Address' control='TextArea' name='about' placeholder='Address' rows='3' value={this.state.about} onChange={this.handleTxtChange} />

                <Form.Field control={Button}>Submit</Form.Field>
            </Form>
            </>
        )
    }
}