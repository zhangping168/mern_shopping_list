import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component{
	state = {
		items:[
			{id:uuid(), name:'Eggs'},
			{id:uuid(), name:'Apples'},
			{id:uuid(), name:'Grapes'},
			{id:uuid(), name:'Breads'},
			{id:uuid(), name:'Hams'}		
		]
	}
	
	render(){
		const {items} = this.state.items;
		return (
				<Container>
					<Button color="dark" style={{marginBottom:'2rem'}} onClick={()=>{
						const name = prompt('Enter Item');
						if(name){
							this.setState(state=>({
								items:[...state.items, {id:uuid(), name:name}]							
							}));
						}					
					}}
					>Add Item</Button>
					
					<ListGroup>
						<TransitionGroup	className="shopping-list">
								{this.state.items.map((item)=>{
									return <CSSTransition timeout={500} className="fade" key={item.id}>
										<ListGroupItem>{item.name}</ListGroupItem>
									</CSSTransition>;
								})}
						</TransitionGroup>
					</ListGroup>
				</Container>
		);	
	}
}

export default ShoppingList;