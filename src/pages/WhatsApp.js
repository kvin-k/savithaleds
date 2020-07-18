import React from 'react';



export default class WhatsApp extends React.Component{
    state={
        mobileNumber:'',
    }
    
    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value,
        })
    }
    
    render(){
        return (
            <>

<section  className="container mx-auto my-10 py-20 bg-gray-200 rounded-lg text-center lg:pt-32">
    <div className="container mx-auto">
      <h3 className="text-3xl font-semibold">WhatsApp without saving contact</h3>
      <form onSubmit={this.handleSubmit}>
            <label>
            <div className="pt-2">
            <input
            type="number"
            name="mobileNumber"
            value={this.state.mobileNumber}
            onChange={this.handleInputChange}
            placeholder=" Enter Number"
            />
            </div>
            </label>
            <div className="button">
                
            <button type="submit" >
                <a target={this.state.mobileNumber>0?"_blank":""} className="disabledCursor" rel="noreferrer" href = {this.state.mobileNumber>0?`https://api.whatsapp.com/send?phone=91${this.state.mobileNumber}&text=Hi`:'/'}>
                Send Message</a>
            </button>
            </div>
            </form>
      </div>
    </section>


            
            </>
            )
        }   
    }
    
    