import React, { Component } from 'react';

import "../css/index.css"
import 'bootstrap/dist/css/bootstrap.css';
import { Form } from 'reactstrap'

const axios = require('axios').default;

class Maincontacts extends Component {
    state = {
        name: '',
        email: '',
        text: '',
    }

    resetForm(){
        this.setState({
            name: '',
            email: '',
            text: '',
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        if(this.state != null){
            axios.post('http://admin.quintaisdocaneiro.com/api/gets.php?act=contactoCartorio&name='+this.state.name + '&text=' +this.state.text + '&email=' +this.state.email)
            .then((response) => {
                console.log(response)
            })
        }
        this.resetForm()
    }

    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }

    render(){

        return(
    <div className="Main">
            <div className="contact-page-area section-padding">
        <div className="container">
        <div className="row">
            <div className="col-lg-5 col-md-12">
                <div className="contact-page-item">
                    <h2>Contacto</h2>
                    <p>Cartório Notarial de Gustavo Pessoa Pinto</p>
                    <div className="adress">
                        <h2>Morada</h2>
                        <span>Avenida Biscarrosse,</span>
                                <span>Número 11</span>
                                <span>3100-490 Pombal</span>
                    </div>
                    <div className="phone">
                        <h2>Telefone</h2>
                        <span>Tel. 236 024 931</span>
                        <span>Fax. 236 023 342</span>
                    </div>
                    <div className="email">
                        <h2>Email</h2>
                        <span>gustavo.pinto@notarios.pt</span>
                    </div>
                    <div className="Horário">
                        <h2>Horário</h2>
                        <p>Dias Úteis</p>
                        <span>09h00m - 17h00m</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-7 col-md-12">
                <div className="contact-area contact-area-2 contact-area-3">
                    <h2>Contacte-nos !</h2>
                    <div className="contact-form">
                        <Form encType="text/plain" className="contact-validation-active ng-pristine ng-valid" id="contact-form" onSubmit={this.handleSubmit.bind(this)}>
                            <div className="half-col">
                                <input type="text" name="name" id="name" className="form-control" placeholder="Nome *" required value={this.state.name} onChange={this.handleChange.bind(this, 'name')}></input>
                            </div>
                            <div className="half-col">
                                <input type="email" name="email" id="email" className="form-control" placeholder="Email *" required value={this.state.email} onChange={this.handleChange.bind(this, 'email')}></input>
                            </div>
                            <div>
                                <textarea className="form-control" name="note" id="note" placeholder="Descriçao *" required value={this.state.text} onChange={this.handleChange.bind(this, 'text')}></textarea>
                            </div>
                            <div className="submit-btn-wrapper">
                                <button type="submit" className="theme-btn-s3">Submeter</button>
                                <div id="loader">
                                    <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>
                                </div>
                            </div>
                            <div className="clearfix error-handling-messages">
                                <div id="success">Obrigado por nos contactar!</div>
                                <div id="error"> Ocorreu um erro ao enviar o email! Por favor tente denovo. </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col col-xs-12">
                <div className="contact-map">
                    <iframe src="https://www.google.com/maps/embed/v1/place?q=place_id:EilBdi4gZGUgQmlzY2Fycm9zc2UsIDMxMDAgUG9tYmFsLCBQb3J0dWdhbCIuKiwKFAoSCa8t04NvZiINEQ_7igghrlKLEhQKEgnTC9Zp1GUiDREuC7qC0sT3Xg&key=AIzaSyDqZGos_v7OO_oSNFnEq9PcZ5CllVXIoOo" allowFullScreen="" title="Cartório Location"></iframe>
                </div>
            </div>
        </div>
    </div>
</div>
       </div>
)
}
}

export default Maincontacts
