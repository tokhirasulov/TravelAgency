import { Component } from 'react';
import style from '../../../style/Booking.module.css'
import { Select, Space,DatePicker } from 'antd'

class ThingsToDo extends Component { 
    render() {
        const travellersN = ['1 traveler', '2 travelers', '3 travelers', '4 travelers', '5 travelers', '6 travelers']
    return (
        <>
            <form>
                    <div className={`${style.staysOptions}`}>
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
                    </div>

                <div className={style.ticketInfo}>
                    <input type="text"  className={`${style.loc} ${style.formInp}`} placeholder='Things to do in'/>
                    <DatePicker className={`${style.calendar} ${style.staysCalendar}`} placeholder='Departing'
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
                        <DatePicker placeholder='Returning' className={`${style.calendar} ${style.staysCalendar}`}
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
                </div>
                <div className={style.searchBtnDiv}>
                <button className={`defaultBtn ${style.searchBtn} ${style.staysSearchBtn}`}>Search</button>
                </div>
            </form>
        </>
    )
}}

export default ThingsToDo