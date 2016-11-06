import React, { Component, PropTypes } from 'react';
import body from '../atoms/Html/Body';

class Html extends Component {
    render() {
        const { content, store, styles, title, icon } = this.props;

        return (
            <html lang='en'>
                <head>
                    <meta httpEquiv='Content-Type' content='text/html' charSet='utf-8'/>
                    <meta httpEquiv='X-UA-Compatible' content='IE=9; IE=8; IE=7; IE=EDGE'/>
                    <meta name='keywords' content=''/>
                    <meta name='author' content=''/>
                    <meta name='description' content=''/>
                    <meta name='viewport' content='width=device-width, initial-scale=1.0'/>

                    <meta property='og:title' content=''/>
                    <meta property='og:type' content=''/>
                    <meta property='og:url' content=''/>
                    <meta property='og:image' content={icon}/>

                    <title>{title}</title>

                    <style dangerouslySetInnerHTML={{__html: styles}}/>
                </head>
                <body>
                    <div id='app' dangerouslySetInnerHTML={{__html: content}}/>
                    <script charSet='UTF-8' dangerouslySetInnerHTML={{__html: `window.__INITIAL_STATE__=${JSON.stringify(store.getState())};`}}/>
                    <script charSet='UTF-8' src='vendor.js'/>
                    <script charSet='UTF-8' src='app.js'/>
                </body>
            </html>
        )
    }
}

Html.propTypes = {
    content: PropTypes.string.isRequired,
    store: PropTypes.object.isRequired,
    styles: PropTypes.string.isRequired,
    title: PropTypes.string,
    icon: PropTypes.string
};

export default Html;