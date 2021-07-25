import React, { Component } from 'react'
import { Container, Menu, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default class Body extends Component{
    render(){

        return(
            <>
         <Menu secondary>
                <Menu.Item>
                  <Link exact to='/'><Button>Home</Button></Link>
                </Menu.Item>    

                <Menu.Item>
                    <Link exact to='/todolist'><Button>TodoList</Button></Link>
                </Menu.Item>

                <Menu.Item>
                    <Link exact to='/createtodo'><Button>Create Todo</Button></Link>
                </Menu.Item>

                <Menu.Item>
                    <Link exact to='/register'><Button>Register</Button></Link>
                </Menu.Item>

                <Menu.Item>
                    <Link exact to='/login'><Button>Log In</Button></Link>
                </Menu.Item>
           </Menu>
           <br/>
           <Container>
              {this.props.children}
           </Container>

              <footer>
                    <p>Footer</p>
               </footer>
               
            </>
        )
    }
}