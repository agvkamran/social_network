import React from 'react';
import NewsItem from './news-item/news-item';

const News = (props) => {
    let newsElements = props.state.news.map((p) => <NewsItem id={p.id} points={p.points} />)

    const newElement = React.createRef();

    const addNews = () => {
        props.addNewPoint();
    }

    const onNewPointChange = () => {
        let point = newElement.current.value;
        props.updateNewPoint(point)
    }

    return (
        <div>
            <div>
                {newsElements}
            </div>
            <div>
                <textarea ref={newElement} value={props.state.newPointText} onChange={onNewPointChange}></textarea>
                <button onClick={addNews}>Add news</button>
            </div>
        </div>
    )
}

export default News;