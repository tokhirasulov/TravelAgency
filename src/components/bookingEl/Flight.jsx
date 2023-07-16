import style from '../../../style/Booking.module.css';
import { Select, Space,DatePicker, AutoComplete } from 'antd'
import {useState} from 'react';

function Flight() {
    const travellersN = ['1 traveler', '2 travelers', '3 travelers', '4 travelers', '5 travelers', '6 travelers']
    const classes = ['Economy', 'Premium Economy', 'Business class', 'First class']

    function changeDestination(e){
        e.preventDefault()
        let a = document.getElementById('origin').value
        document.getElementById('origin').value = document.getElementById('destination').value
        document.getElementById('destination').value = a

        console.log('clicked')
    }

    return (
        <>
            <form>
                <div className={style.choiceContainer}>
                    <div className={style.radios}>
                        <div className={style.nameChoice} >
                        <label className={style.customRadioBtn} >
                            <input type='radio' name='choice' id='oneWay'/> 
                            <span className={style.checkmark}></span>
                        </label>
                        <label htmlFor="oneWay" id='oneWay'>One-way</label>
                        </div>
                        <div className={style.nameChoice}>
                        <label className={style.customRadioBtn} >
                            <input type='radio' name='choice' value id='return' defaultChecked />
                            <span className={style.checkmark}></span>
                        </label>
                        <label htmlFor="return" id='return'>Return</label>
                        </div>
                        <div className={style.nameChoice}>
                        <label className={style.customRadioBtn}>
                            <input type='radio' name='choice' value id='multiCity' />
                            <span className={style.checkmark}></span>
                        </label>
                        <label htmlFor='multiCity' id='multicity'>Multi-city</label>
                        </div>
                    </div>
                    <div className={style.options}>
                    <Space>
                        <Select defaultValue={"1 traveler"}
                        style={{
                            width: 120,
                        }}
                        bordered={false}
                        options={travellersN.map((n) => ({label:n, value:n}))}
                        className={style.selects}
                        />
                    </Space>
                    <Space>
                        <Select defaultValue={"Economy"}
                        style={{
                            width: 120,
                        }}
                        bordered={false}
                        options={classes.map((c) => ({label:c, value:c}))}
                        />
                    </Space>
                    </div>
                </div>

                <div className={style.ticketInfo}>
                        <input type="text"  className={`${style.from} ${style.formInp}`} placeholder='from' id='origin'/>
                        <input type="text"  className={`${style.to} ${style.formInp}`} placeholder='to' id='destination'/>
                    <button onClick={changeDestination}  className={style.inversePlane}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <g clipPath="url(#clip0_11_61)">
                            <path d="M15.6653 4.4758L12.6814 1.49193M15.6653 4.4758H2.2379H15.6653ZM15.6653 4.4758L12.6814 7.45967L15.6653 4.4758Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2.2379 13.4274L5.22177 10.4435M2.2379 13.4274H15.6653H2.2379ZM2.2379 13.4274L5.22177 16.4113L2.2379 13.4274Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_11_61">
                            <rect width="17.9032" height="17.9032" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    </button>
                    

                    <DatePicker className={`${style.calendar} ${style.flightCalendar}`} placeholder='Departing'
                        cellRender={(current) => {
                            const style = {};
                            if (current.date() === 1) {
                            style.border = '1px solid #1677ff';
                            style.borderRadius = '50%';
                            }
                            return (
                            <div className={`ant-picker-cell-inner`} style={style}>
                                {current.date()}
                            </div>
                            );
                        }}
                        />
                        <DatePicker placeholder='Returning' className={`${style.calendar} ${style.flightCalendar}`} id='returnId'
                        cellRender={(current) => {
                            const style = {};
                            if (current.date() === 1) {
                            style.border = '1px solid #1677ff';
                            style.borderRadius = '50%';
                            }
                            return (
                            <div className="ant-picker-cell-inner" style={style} id='returnId'>
                                {current.date()}
                            </div>
                            );
                        }}/>
                </div>
                <div className={style.searchBtnDiv}>
                <button className={`defaultBtn ${style.searchBtn}`}>Search</button>
                </div>
            </form>
        </>
    )
}

export default Flight

