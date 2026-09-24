function Books() {
  return (
    <section className="books-section" id="books">
      <h2>Books I Love</h2>

      <div className="books-list">

        <div className="book-item">
          <div>
            <h3>Atomic Habits</h3>
            <p className="book-author">James Clear</p>
          </div>

          <span className="book-category">Self Development</span>
        </div>

        <div className="book-item">
          <div>
            <h3>Deep Work</h3>
            <p className="book-author">Cal Newport</p>
          </div>

          <span className="book-category">Productivity</span>
        </div>

        <div className="book-item">
          <div>
            <h3>The Pragmatic Programmer</h3>
            <p className="book-author">David Thomas & Andrew Hunt</p>
          </div>

          <span className="book-category">Technology</span>
        </div>

        <div className="book-item">
          <div>
            <h3>Clean Code</h3>
            <p className="book-author">Robert C. Martin</p>
          </div>

          <span className="book-category">Programming</span>
        </div>

      </div>
    </section>
  );
}

export default Books;