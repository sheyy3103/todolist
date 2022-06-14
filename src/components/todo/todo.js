import React from "react";
import clsx from "clsx";
import style from "./todo.module.css"

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo:[

            ],
            item:'',
            checkUpdate: -1
        }
    }
    getValue(e){
        this.setState({item:e.target.value})
    }
    addTodo(){
        let todoList = this.state.todo;
        todoList.push({name:this.state.item,status:false});
        this.setState({
            todo: todoList
            }
        )
    }
    checkUpdate(e,key){
        this.setState({
            checkUpdate:key
            }
        )
    }
    update(e){
        let todoList = this.state.todo;
        todoList.find((item,key) => {
            return key == this.state.checkUpdate  
        }).name = this.state.item
        this.setState({
            todo: todoList, 
            checkUpdate: -1
        })
    }
    delete(e,key){
        let todoList = this.state.todo;
        todoList.splice(key,1);
        this.setState({
            todo: todoList, 
            checkUpdate: -1
        })       
    }
    changeStatus(e,key){
        let todoList = this.state.todo;
        todoList[key].status = !todoList[key].status;
        this.setState({
            todo: todoList
        })
    }
    state = {  }
    render() { 
        return ( 
            <>
                <form action="#" className={clsx([style.formTodo])} >
                    <table cellSpacing="0" className={clsx([style.tableform])} >
                        <tr>
                        <td><input type="text" placeholder="Enter job..." onChange={(e)=>this.getValue(e)} /></td>
                        <td><button className={clsx([style.add])} onClick={(e) => this.addTodo()}>add</button></td>
                        </tr>
                    </table>
                </form>
                <table cellSpacing="0" cellPadding="10" className={clsx([style.table])}>
                    <thead>
                        <tr>
                            <th className={clsx([style.uwu])}>STT</th>
                            <th>Jobs</th>
                            <th className={clsx([style.uwu])}>Status</th>
                            <td className={clsx([style.uwu])}></td>
                            <th className={clsx([style.uwu])}>Action</th>
                            <td className={clsx([style.uwu])}></td>
                        </tr>
                    </thead>
                {
                        this.state.todo.map((item,key)=>{
                            return (
                                <tbody key={key}>
                                    <tr>
                                        <td className={clsx([style.uwu])}>{key+1}.</td>
                                        <th>
                                            
                                            {(this.state.checkUpdate == key)?
                                                <input type="text" defaultValue={item.name} onChange={(e)=>this.getValue(e)} onBlur={(e) => this.update(e)} />
                                                :
                                                <span>{item.name}</span>
                                            }
                                        </th>
                                        <td className={clsx([style.uwu])}>{item.status ? 'Finished' : 'Unfinished'}</td>
                                        <td className={clsx([style.uwu])}><button className={clsx([style.edit])} onClick={(e) => this.checkUpdate(e,key)}>edit</button></td>
                                        <td className={clsx([style.uwu])}><button className={clsx([style.delete])} onClick={(e) => this.delete(e,key)}>delete</button></td>
                                        <td className={clsx([style.uwu])}><button className={clsx([style.changeStatus])} onClick={(e) => this.changeStatus(e,key)}>change status</button></td>
                                    </tr>
                                </tbody>
                            )
                            }
                        )
                }
                </table>

            </>
         );
    }
}
 
export default Todo;