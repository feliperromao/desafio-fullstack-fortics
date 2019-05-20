import React from 'react'

export default props => (
    <footer className="sticky-footer bg-white">
      <div className="container my-auto">
        <div className="copyright text-center my-auto">
          <span>Copyright &copy; Felipe Romão 2019</span>
        </div>
      </div>
      <div id="loading" className="loading hidden">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </footer>
)