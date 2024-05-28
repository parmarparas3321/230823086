// import bg1 from "./img/bg.jpg"; 
// function Loan_cal()
// {
//     return(
//             <>
//                 <div>
                
//                     <div style={{ backgroundSize: 'cover',  backgroundImage: `url(${bg1})`,   width: '100%', height: '900px',  paddingTop: "100px",}}>
                                    
//                             <div style={{borderRadius:"15px","background":"skyblue",marginLeft:"200px",width:"40%",height:"80%", }}>
//                                         <h2 style={{ textAlign: "center",paddingTop:"30px",marginBottom:"0"}}>Loan Calculator</h2>
//                                         <form action="#" method="post" style={{padding : '20px'}} >
//                                             <div style={{ marginBottom: 20 }}>
//                                             <label style={{ display: "block", marginBottom: 5 , textAlign: "center" }}>
//                                                 Loan Amout
//                                             </label>
//                                             <input type="text" id="username" name="username"placeholder="Enter Loan Amount"style={{marginLeft:"80px",width: "70%",padding:10,border: "1px solid #ccc",borderRadius: 3,boxSizing: "border-box"}} required=""/>
//                                             </div>
//                                             <div style={{ marginBottom: 20 }}>
//                                             <label  style={{ display: "block", marginBottom: 5,textAlign: "center" }}>
//                                                 Interest Rate(%)
//                                             </label>
//                                             <input type="text" name="loanAmt" placeholder="Enter Loan Interest" style={{ marginLeft:"80px",width: "70%", padding: 10, border: "1px solid #ccc", borderRadius: 3, boxSizing: "border-box" }} required=""/>
//                                             </div>
//                                             <div style={{ marginBottom: 20 }}>
//                                             <label style={{ display: "block", marginBottom: 5 , textAlign: "center" }}>
//                                                 Loan Term
//                                             </label>
//                                             <input type="date"  name="username" style={{marginLeft:"80px",width: "70%",padding:10,border: "1px solid #ccc",borderRadius: 3,boxSizing: "border-box",}} required=""/>
//                                             </div>
//                                             <div style={{ marginBottom: 20 }}>
//                                             <label style={{ display: "block", marginBottom: 5 , textAlign: "center" }}>
//                                                 Payment
//                                             </label>
//                                             <input type="text"  name="payment" style={{marginLeft:"80px",width: "70%",padding:10,border: "1px solid #ccc",borderRadius: 3,boxSizing: "border-box"}} required=""/>
//                                             </div>
//                                             <div style={{ marginBottom: 20 }}>
//                                             <button type="submit" style={{ marginLeft:"80px",width: "70%", padding: 10, backgroundColor: "#333", color: "#fff", border: "none", borderRadius: 10, cursor: "pointer", marginTop:"30px"}}>
//                                                Calculate
//                                             </button>
//                                             </div>
//                                         </form>
//                                 <div style={{display:"flex",width:"80%"}}>
//                                     <div style={{ height: "150px",width: "150px",backgroundColor: "#333",borderRadius: "50%", marginLeft:"100px"}}> 
//                                        <h4 style={{marginLeft:"20px",marginTop:"30px",color:"white"}}>Total Interest</h4>
//                                        <h3 style={{marginLeft:"30px",marginTop:"-10px",color:"white"}}>23564 Rs.</h3>
//                                         <h4 style={{marginLeft:"45px",marginTop:"-10px",color:"white"}}>Chart</h4>
//                                     </div>
//                                     <div style={{ height: "150px",width: "150px",backgroundColor: "#333",borderRadius: "50%", marginLeft:"100px"}}> 
//                                         <h4 style={{marginLeft:"20px",marginTop:"30px",color:"white"}}>Total Interest</h4>
//                                        <h3 style={{marginLeft:"30px",marginTop:"-10px",color:"white"}}>23564 Rs.</h3>
//                                        <h4 style={{marginLeft:"45px",marginTop:"-10px",color:"white"}}>Chart</h4>
//                                     </div>
//                                 </div>
//                          </div>
//                     </div>
                
//                  </div>
//             </>
//     );
// }

// export default Loan_cal;

import bg1 from "./img/bg.jpg"; 

function Loan_cal() {
    return (
        <>
            <div>
                <div style={{ 
                    backgroundSize: 'cover',  
                    backgroundImage: `url(${bg1})`, 
                    backgroundRepeat:`no-repeat`,
                    backgroundAttachment:`fixed`,
                    width: '100%', 
                    height: '900px',  
                    paddingTop: "100px",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                
                }}>
                    <div style={{
                        borderRadius: "15px",
                        background: "skyblue",
                        width: "80%",
                        padding: "20px",
                        maxWidth: "500px",
                        position:"fixed"
                        
                        // marginRight:"500px"
                    }}>
                        <h2 style={{ textAlign: "center" }}>Loan Calculator</h2>
                        <form action="#" method="post" style={{ justifyContent: "left"}}>
                            <div style={{ marginBottom: 20 }}>
                                <label style={{ display: "block", marginBottom: 5 }}>Loan Amount</label>
                                <input type="text" id="username" name="username" placeholder="Enter Loan Amount" style={{ width: "100%" }} required=""/>
                            </div>
                            <div style={{ marginBottom: 20 }}>
                                <label style={{ display: "block", marginBottom: 5 }}>Interest Rate (%)</label>
                                <input type="text" name="loanAmt" placeholder="Enter Loan Interest" style={{ width: "100%" }} required=""/>
                            </div>
                            <div style={{ marginBottom: 20 }}>
                                <label style={{ display: "block", marginBottom: 5 }}>Loan Term</label>
                                <input type="date"  name="username" style={{ width: "100%" }} required=""/>
                            </div>
                            <div style={{ marginBottom: 20 }}>
                                <label style={{ display: "block", marginBottom: 5 }}>Payment</label>
                                <input type="text"  name="payment" style={{ width: "100%" }} required=""/>
                            </div>
                            <div style={{ marginBottom: 20 }}>
                                <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#333", color: "#fff", border: "none", borderRadius: "10px", cursor: "pointer" }}>
                                    Calculate
                                </button>
                            </div>
                        </form>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{ flexBasis: "45%" }}>
                                <div style={{ backgroundColor: "#333", borderRadius: "50%", padding: "20px", textAlign: "center" }}>
                                    <h4 style={{ color: "white" }}>Total Interest</h4>
                                    <h3 style={{ color: "white" }}>23564 Rs.</h3>
                                    <h4 style={{ color: "white" }}>Chart</h4>
                                </div>
                            </div>
                            <div style={{ flexBasis: "45%" }}>
                                <div style={{ backgroundColor: "#333", borderRadius: "50%", padding: "20px", textAlign: "center" }}>
                                    <h4 style={{ color: "white" }}>Total Interest</h4>
                                    <h3 style={{ color: "white" }}>23564 Rs.</h3>
                                    <h4 style={{ color: "white" }}>Chart</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Loan_cal;
