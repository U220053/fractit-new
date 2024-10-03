// const ContactWithAgent = () => {
//   return (
//     <form action="#">
//       <div className="search_option_button">
//         <button type="submit" className="btn btn-block btn-thm w-100">
//           Buy
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ContactWithAgent;
const ContactWithAgent = () => {
  return (
    <form action="#">
      <div style={{ marginBottom: "10px" }}>STARTING AT : 1234</div>
      <div className="search_option_button" style={{ marginBottom: "10px" }}>
        <button type="submit" className="btn btn-block btn-thm w-100">
          Available Tokens:
        </button>
      </div>
      <div className="form-group mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Enter amount"
        />
      </div>
      <div className="search_option_button">
        <button type="submit" className="btn btn-block btn-thm w-100">
          Buy
        </button>
      </div>
    </form>
  );
};

export default ContactWithAgent;
