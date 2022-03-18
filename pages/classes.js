import React, { useEffect } from "react"
class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  render() {
    return (
      <div className="p-5 y space-y-5">
        <p className="text-2xl font-body font-semibold text-gray-600">
          You clicked {this.state.count} times
        </p>
        <button
          className=" text-sm font-semibold bg-purple-900 text-white px-3 py-2 rounded shadow transition-all delay-150 hover:bg-purple-700"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Click me
        </button>
      </div>
    )
  }
}

export default Example
