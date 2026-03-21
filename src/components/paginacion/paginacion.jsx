import "./paginacion.css";

function Paginacion({ currentPage, totalPages, onPageChange }) {
 return (
    <div className="paginacion">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num)}
          className={num === currentPage ? 'active' : ''}
        >
          {num}
        </button>
      ))}
    </div>
  );
};

export default Paginacion;
