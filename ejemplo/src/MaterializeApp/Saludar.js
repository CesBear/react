import React from 'react';
import {Button, Modal, Card, CardTitle} from 'react-materialize'


const Saludar = () => {
    return (
        <div>
            <Card className='small'
                  header={<CardTitle image='img/sample-1.jpg'>This is a Modal</CardTitle>}>
                This is a modal please press the button below and discover what is a modal
            </Card>
            <Modal
                header='Saludo: '
                trigger={<Button>Presiona Aquí</Button>}
                actions={
                <button className='btn btn-flat modal-action modal-close'> close

                </button>
            }>
                <h1>Hola</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum</p>
            </Modal>
        </div>
    );
};

export default Saludar;