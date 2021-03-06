/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Recipe from './Recipe';

class Result extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stage: 0
        };
    }

    render = () => {
        var array = this.props.data.hits;
        console.log("datatype", typeof (array));
        console.log("data", array);
        var a = "100";
        array.map((content) => {
            console.log("img", content.recipe.image);
        });
        return (

            <div className="container">
                <div className="row">
                    {array.map((content) => {

                        return (<div className="col-md-3 col-sm-6" key={content.recipe.image}>
                            <a href="#" onClick={(e)=>{this.props.onClick(content);}}>
                                <img className="img-thumbnail"src={content.recipe.image} />
                                <p>{content.recipe.label}</p>
                            </a>
                        </div>);
                    })
                    }
                    {console.log("input", this.state.stage)}
                    {/* {this.state.stage && (<Recipe data={this.state.stage} />)} */}
                </div>
            </div>
        );

    }
}


export default Result;
