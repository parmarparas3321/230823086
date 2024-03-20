
function Search() {
  return (
   <>
    <div
      style={{display: "flex",alignItems: "center",border: "1px solid #ccc",borderRadius: 5,padding: 5,width: 250}}>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ width: 20, height: 20, marginRight: 5 }}>
      <path d="M21.71 20.29l-4.99-4.99C17.67 13.26 18 11.69 18 10c0-4.42-3.58-8-8-8s-8 3.58-8 8 3.58 8 8 8c1.69 0 3.26-.33 4.29-.88l4.99 4.99c.19.2.45.29.71.29s.5-.1.71-.29c.39-.39.39-1.02 0-1.41zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
      </svg>
       {/* Search input field */}
      <input type="text" style={{ border: "none", outline: "none", width: "100%", padding: 5 }} placeholder="Search Something Here..."/>
    </div>
   </>
  );
}

export default Search;
{/* 
<div style="display: flex; align-items: center; border: 1px solid #ccc; border-radius: 5px; padding: 5px; width: 250px; ">
  <!-- Search icon -->
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 20px; height: 20px; margin-right: 5px;">
    <path d="M21.71 20.29l-4.99-4.99C17.67 13.26 18 11.69 18 10c0-4.42-3.58-8-8-8s-8 3.58-8 8 3.58 8 8 8c1.69 0 3.26-.33 4.29-.88l4.99 4.99c.19.2.45.29.71.29s.5-.1.71-.29c.39-.39.39-1.02 0-1.41zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
  </svg>
  <!-- Search input field -->
  <input type="text" style="border: none; outline: none; width: 100%; padding: 5px;" placeholder="Search Something Here...">
</div> */}
