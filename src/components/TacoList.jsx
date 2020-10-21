import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

export default class TacoList extends Component {

    state = {
        tacos: [],
        currentTaco: {},
        showModal: false
    }

    selectedValue = 'active'

    tacoClick = id => {
        console.log(id);
        axios.get(`http://localhost:5000/${id}`)
            .then(reponse => reponse.data)
            .then(taco => this.props.history.push({ pathname: '/edittaco', state: { tacoId: taco.id } }));
    }

    tacoDelete = id => {
        this.handleClose();
        const { taco } = this.state;
        axios.delete(`http://localhost:5000/${id}`)
            .then(reponse => reponse.data)
            .then(taco => this.setState({ currentTaco: taco }))
            .then(data => window.location.reload());
    }

    editTaco = id =>{
        console.log(id);
        axios.get(`http://localhost:5000/${id}`)
        .then(reponse => reponse.data)
        .then(taco => this.props.history.push({pathname: '/edittaco', state: {tacoId: taco.id}}));
    }


    handleClose = () => {
        this.setState({ showModal: false });
        console.log(this.state.showModal);
    }
    handleShow = () => {
        this.setState({ showModal: true });
        console.log(this.state.showModal);
    }



    componentDidMount() {
        this.watchCode();
    }


    onSelect = event => event.target.className = `list-group-item ${this.selectedValue}`;
    onDeselect = event => event.target.className = 'list-group-item';

    watchCode = () => setTimeout(() => {
        axios.get('http://localhost:5000')
            .then(reponse => reponse.data)
            .then(tacos => {
                this.setState({
                    tacos: tacos.map(taco => {
                        return <li className={`list-group-item`} key={taco.id} /*onClick={()=>this.tacoClick(taco.id)}
                onMouseOver={this.onSelect} onMouseOut={this.onDeselect}*/>
                            Nombre del taco: {taco.name}
                            <br />
                            <br />
                            <button className="button" onClick={this.handleShow}>Eliminar</button>
                            <button className="button2" onClick={() => this.editTaco(taco.id)}>Editar</button>
                        </li>

                    })
                })
            });

        this.watchCode();
    }, 1000);



    render() {

        return (
            <Fragment>
                <ul style={{
                    cursor: 'pointer'
                }} className='list-group'>
                    {this.state.tacos}
                </ul>

                <Modal show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmar</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>¿Estas Seguro que quieres eliminar este taco?</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <button variant="secondary" onClick={this.handleClose}>Cancelar</button>
                        <button variant="primary" onClick={this.tacoDelete}>Confirmar</button>
                    </Modal.Footer>
                </Modal>
            </Fragment>



        );
    }
}