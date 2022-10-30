import React from 'react'
import styles from './Filter.module.css'
function Filter() {
  return (
    <div>
        <h1>Latest Posts</h1>
        <h4>Filter By Cotegory</h4>
        <div className={styles.list}>
            <ul>
                <li>All</li>
                <li>Artificial intelligence</li>
                <li>Cloud Computing</li>
                <li>DevOps</li>
                <li>Programming Language</li>
                <li>Mobile Application Development</li>
                <li>Technology and Tools</li>
                <li>Get a Job in Tech Company</li>
                <li>Others</li>
            </ul>
        </div>
    </div>
  )
}

export default Filter;