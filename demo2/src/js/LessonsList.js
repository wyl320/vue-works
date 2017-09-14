import React, { Component } from 'react';
import Lesson from './Lesson';

class LessonsList extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            num: [
                {
                    title: 'Lesson 1: title',
                    description: 'Lesson 1: description'
                },
                {
                    title: 'Lesson 2: title',
                    description: 'Lesson 2: description'
                },
                {
                    title: 'Lesson 3: title',
                    description: 'Lesson 3: description'
                },
                {
                    title: 'Lesson 4: title',
                    description: 'Lesson 4: description'
                }
            ]
        })
    }

    render() {
        let aa = this.state.num;
        return (
            <div>
            {
            aa.map(function(da, i) {
                return (<Lesson key={"alesson" + i}  index={i} lessons={da} />)
            })
            }
          </div>
        )
    }

}

export default LessonsList;



