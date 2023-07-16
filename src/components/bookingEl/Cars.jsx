import style from '../../../style/Booking.module.css'
import { Select, Space,DatePicker } from 'antd'
import React, { useState } from 'react';
import {TimePicker } from 'antd';

function Cars() {
    const travellersN = ['1 traveler', '2 travelers', '3 travelers', '4 travelers', '5 travelers', '6 travelers']
    const [isChecked, setIsChecked] = useState(false)
    const [type, setType] = useState('time');
    const PickerWithType = ({ type, onChange }) => {
        if (type === 'time') return <TimePicker className={`${style.carsCalendar} ${style.calendar}`} placeholder='Pick-up' onChange={onChange} />;
        return <DatePicker  picker={type} onChange={onChange} />;
      };
    const PickerWithType2 = ({ type, onChange }) => {
        if (type === 'time') return <TimePicker className={`${style.carsCalendar} ${style.calendar}`} placeholder='Drop-off' onChange={onChange} />;
        return <DatePicker  picker={type} onChange={onChange} />;
    };
    
    return (
        <>
            <form>
                <div className={style.choiceContainer}>
                    <div className={style.radios}>
                        <div className={style.nameChoice}>
                        <label className={style.customRadioBtn}>
                            <input type='radio' name='choice' value id='return' defaultChecked/>
                            <span className={style.checkmark}></span>
                        </label>
                        <label htmlFor="return">Rental cars</label>
                        </div>
                        <div className={style.nameChoice}>
                        <label className={style.customRadioBtn}>
                            <input type='radio' name='choice' value id='multiCity'/>
                            <span className={style.checkmark}></span>
                        </label>
                        <label htmlFor='multiCity'>Airport transportation</label>
                        </div>
                    </div>
                    {isChecked && <div className={style.options}>
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
                    </div>}
                </div>

                <div className={`${style.ticketInfo} ${style.carsRental}`}>
                    <input type="text" className={`${style.loc} ${style.formInp} ${style.pickUp}`} placeholder='Pick-up'/>
                    <input type="text" className={`${style.loc} ${style.formInp} ${style.pickUp}`} placeholder='Same as pick-up'/>

                    <DatePicker className={`${style.calendar} ${style.carsCalendar}`} placeholder='Departing'
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
                        <DatePicker placeholder='Returning' className={`${style.calendar} ${style.carsCalendar}`}
                        cellRender={(current) => {
                            const style = {};
                            if (current.date() === 1) {
                            style.border = '1px solid #1677ff';
                            style.borderRadius = '50%';
                            }
                            return (
                            <div className="ant-picker-cell-inner" style={style}>
                                {current.date()}
                            </div>
                            );
                        }}/>
                        <PickerWithType type={type} className={`${style.calendar}`}
                        onChange={(value) => console.log(value)} 
                        />
                        <PickerWithType2 type={type} className={`${style.calendar}`} 
                        onChange={(value) => console.log(value)} 
                        />
                </div>
                <div className={style.searchBtnDiv}>
                <button className={`defaultBtn ${style.searchBtn}`}>Search</button>
                </div>
            </form>
        </>
    )
}

export default Cars