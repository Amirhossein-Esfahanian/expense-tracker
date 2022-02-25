import React from "react";

export default function NavSearch() {
  return (
    <div className="top-nav-search">
      <form>
        <input type="text" className="form-control" placeholder="Search here" />
        <button className="btn" type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
}
