import style from '../../../style/Booking.module.css'
import { Select, Space,DatePicker, AutoComplete } from 'antd'
import Cars from './Cars'
import Flight from './Flight'
import Stays from './Stays'
import { Component } from 'react'

class Packages extends Component {

    handleChange(){
        const checkbox1 = document.getElementById('checkbox1').checked
        const checkbox2 = document.getElementById('checkbox2').checked
        const checkbox3 = document.getElementById('checkbox3').checked
        const checkbox1Div = document.getElementById('checkbox1Div')
        const checkbox2Div = document.getElementById('checkbox2Div')
        const checkbox3Div = document.getElementById('checkbox3Div')

        if(!checkbox1 && !checkbox2 && !checkbox3){
            document.getElementById('warning').style.display = 'block'
        } else{
            document.getElementById('warning').style.display = 'none'
        }

        if(checkbox1){
            checkbox1Div.style.display = 'block'

        } else {
            checkbox1Div.style.display = 'none'
        }

        if(checkbox2){
            checkbox2Div.style.display = 'block'
        } else {
            checkbox2Div.style.display = 'none'
        }

        if(checkbox3){
            checkbox3Div.style.display = 'block'
            
        } else {
            checkbox3Div.style.display = 'none'
        }

        if(checkbox1 && checkbox2 && checkbox3 || checkbox1 && checkbox2  || checkbox2 && checkbox3){
            checkbox2Div.style.display = 'block'
            checkbox1Div.style.display = 'none'
            checkbox3Div.style.display = 'none'
        } else if(checkbox1 && checkbox3){
            checkbox1Div.style.display = 'block'
            checkbox2Div.style.display = 'none'
            checkbox3Div.style.display = 'none'
        }
    }
    
    render(){
        return (
            <>
                    <div className={style.choiceContainer}>
                        <div className={style.radios}>
                            <div className={style.nameChoice}>
                            <label htmlFor="checkbox1">Add stay</label>
                            <input type="checkbox" name="packagesChoice" id="checkbox1" onChange={this.handleChange} defaultChecked/>
                            </div>
                            <div className={style.nameChoice}>
                            <label htmlFor="checkbox2">Add Flight</label>
                            <input type="checkbox" name="packagesChoice" id="checkbox2" onChange={this.handleChange}/>
                            </div>
                            <div className={style.nameChoice}>
                            <label htmlFor="checkbox3">Add car</label>
                            <input type="checkbox" name="packagesChoice" id="checkbox3" onChange={this.handleChange}/>
                            </div>
                        </div>
                    </div>
                    <h3 style={{color:'black', textAlign: 'center', marginTop: '2rem', display:'none'}} id='warning'>Please select one or more items </h3>
                    <div id='checkbox1Div' style={{display:'block', marginTop: '-1rem',}} >
                        <Stays />
                    </div>
                    <div id='checkbox2Div' style={{display:'none'}}>
                        <div style={{}}><Flight /></div>
                    </div>
                    <div id='checkbox3Div' style={{display:'none', marginTop: '-1rem'}} >
                        <Cars />
                    </div>
            </>
        )
    }
    }
    
    export default Packages