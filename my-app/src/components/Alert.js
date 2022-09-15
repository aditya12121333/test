import React from 'react'

export const Alert = (props) => {
    return (
        props.alert && <div>
            <div className={`alert alert-${props.alert.type} text-upper alert-dismissible fade show`} role="alert">
                <strong className="text-capitalize" > {props.alert.type}  </strong>: {(props.alert.msg)}
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>


        </div>
    )
}
