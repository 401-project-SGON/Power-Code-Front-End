import React from 'react';
import { connect } from 'react-redux'
import { getData } from '../../store/actions.js'



const Data = (props) => {

    return (
        <section>
            <button onClick={() => !props.reducer.renderd&&props.getData()}>get courses</button>
            <ul>
                {props.reducer.data.map(item => {
                    console.log('item : ', item);
                    return (
                        <li key={item._id}>
                            {item.courseName}
                        </li>
                    )
                })}
            </ul>
            {/* <ul></ul> */}
        </section>
    )


}

const mapStateToProps = state => ({
    reducer: state.reducer
});


const mapDispatchToProps = { getData };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Data);
