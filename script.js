document.addEventListener('DOMContentLoaded', function() {
    // Adding activity graph bars dynamically
    const activityGraph = document.querySelector('.activity-graph');
    
    // Heights for the bars in pixels
    const heights = [35, 50, 80, 65, 40];
    
    heights.forEach(height => {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = height + 'px';
        activityGraph.appendChild(bar);
    });
    
    // Adding hover effects to the Create Post button
    const createPostBtn = document.querySelector('.create-post-btn');
    
    createPostBtn.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#ffbe1a';
    });
    
    createPostBtn.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#ffd24f';
    });
    
    // Adding a cursor pointer near the Create Post button
    const createContent = document.querySelector('.create-content');
    const cursorPointer = document.createElement('div');
    cursorPointer.style.position = 'absolute';
    cursorPointer.style.width = '20px';
    cursorPointer.style.height = '20px';
    cursorPointer.style.bottom = '50px';
    cursorPointer.style.left = '260px';
    cursorPointer.style.zIndex = '10';
    cursorPointer.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 10L9 14L15 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;
    
    createContent.style.position = 'relative';
    createContent.appendChild(cursorPointer);
});