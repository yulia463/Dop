import React, { ChangeEvent, useState, KeyboardEvent } from 'react';
import { FilterType, ShopListPropsType } from "./Typisation";
import s from './App.module.css'

export const ShopList = (props: ShopListPropsType) => {

    const onclickHandler = (value: FilterType) => {
        props.changeFilter(value)
    }
    const [inputValue, setInputValue] = useState("")



    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value)
    }



    const onClickHandler = () => {
        const trimmedValue = inputValue.trim()
        if (trimmedValue !== "") {
            props.addtask(inputValue)
            setInputValue('')
        }

    }

    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        const trimmedValue = inputValue.trim()
        if (event.key === "Enter")
            if (trimmedValue !== "") {
                props.addtask(inputValue)
                setInputValue('')
            } else {
                setInputValue('')
            }

    }




    return (
        <div>
            <h3>{props.title}</h3>
            <input value={inputValue} onChange={onChangeHandler} onKeyDown={onKeyDownHandler} />
            <button disabled={inputValue.trim() === ""} onClick={onClickHandler}>add</button>
            <ol>
                {props.whatToBuy.map((item) => {

                        const colorPriceExpected = () => {
                            return item.expectedPrice <= item.realPrice
                                ? s.goodPrice
                                : s.badPrice
                        }

                        const colorPriceReal = () => {
                            return item.expectedPrice > item.realPrice
                                ? s.goodPrice
                                : s.badPrice
                        }


                        return (
                            <li key={item.id} className={item.inCart ? "" : s.inCart}>
                                <div><b>{item.title}</b>
                                    <button onClick={() => { props.deleteItemShop(item.id) }}> -x- </button></div>
                                <div className={colorPriceExpected()}>{'expected price: ' + item.expectedPrice}</div>
                                <div className={colorPriceReal()}>{'real price: ' + item.realPrice}</div>
                                <span>in basket: </span>
                                <input type={"checkbox"} checked={item.inCart} onChange={(event) => props.changeCardStatus(item.id, event.currentTarget.checked)} />
                            </li>
                        )
                    }
                )
                }
            </ol>
            <div>
                {/*<button className={props.filter === "all" ? s.activeFilter : ""} onClick={() => onclickHandler("all")}>all</button>*/}
                {/*<button className={props.filter === "buy" ? s.activeFilter : ""} onClick={() => onclickHandler("buy")}>buy</button>*/}
                {/*<button className={props.filter === "not buy" ? s.activeFilter : ""} onClick={() => onclickHandler("not buy")}>not buy</button>*/}
                {props.buttonsFilter.map(el=>{
                  return  <button className={el.filterButtonValue === props.filter ? s.activeFilter : ""} onClick={() => onclickHandler(el.filterButtonValue)}>{el.title}</button>
                })}
            </div>
        </div>
    );
};

// () =>{alert('удален из списка товар #' + item.id)}