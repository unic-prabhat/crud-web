import React, { Component } from 'react';
import cookie from 'react-cookies';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class EmailVerification extends Component {

    state={
        data:cookie.load('userlogin'),
        userinfo:cookie.load('userdata')
    }

    render(){

        return(

            <>
             <h2>Email Verification{this.state.data}</h2>
             {this.state.data===undefined
             ?
             <>
             <Link exact to='/login'>Please Login</Link>
             </>
             :
             <>
              <h2>Please click on this link for email verification</h2>
              <Link exact to={`/emailverificationmatch/${this.state.userinfo.email_verification_code}/${this.state.userinfo._id}`}>Verify Email</Link>
             </>
             }
            </>
        )
    }
}