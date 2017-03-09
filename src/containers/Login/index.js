import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Toast } from 'antd-mobile'
import { FormList } from '../../components'
import { postLoginAction } from './action'

class _Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isloading: false,
      name: '',
      pwd: '',
      errorPwd: false,
      errorName: false
    }
  }

  render() {
    return (
      <FormList _onChangeName={(e)=>this._onChangeName(e)} _onChangePwd={(e)=>this._onChangePwd(e)} isloading={this.state.isloading} _onClick={()=>this._onClick()} errorPwd={this.state.errorPwd} errorName={this.state.errorName}/>
    )
  }
  _onClick() {
    if (this.state.isloading) {
      return false;
    }
    this.setState({
      isloading: true
    })
    if (this.state.name != '' && this.state.pwd != '') {
      this.props.postLogin((loginStatus) => {
        if (loginStatus == 1) {
          // Toast.success('登录成功', 5)
          sessionStorage.setItem('loginStatus', '1')
          this.context.router.goBack()
        } else {
          Toast.fail('登录失败', 5)
          sessionStorage.setItem('loginStatus', '0')
        }
        this.setState({
          isloading: false
        })
      }, { name: this.state.name, pwd: this.state.pwd })
    } else {
      this.setState({
        isloading: false
      })
    }

    if (this.state.name == '') {
      this.setState({
        name: '',
        errorName: true
      })
    }
    if (this.state.pwd == '') {
      this.setState({
        pwd: '',
        errorPwd: true
      })
    }
  }
  _onChangeName(e) {
    if (e == '') {
      this.setState({
        name: '',
        errorName: true
      })
    } else {
      this.setState({
        name: e,
        errorName: false
      })
    }
  }
  _onChangePwd(e) {
    if (e == '') {
      this.setState({
        pwd: '',
        errorPwd: true
      })
    } else {
      this.setState({
        pwd: e,
        errorPwd: false
      })
    }
  }
}

_Login.contextTypes = {
  router: React.PropTypes.object
}

export const Login = connect((state) => {
  return {
    loginStatus: state.loginStatus
  }
}, (dispatch) => {
  return {
    postLogin: (cb, obj) => dispatch(postLoginAction(cb, obj))
  }
})(_Login)
