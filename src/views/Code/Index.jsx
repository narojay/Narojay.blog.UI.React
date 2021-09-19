import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism"

export class Code extends React.Component {
  render() {
    return (
      <SyntaxHighlighter
        startingLineNumber={0}
        language={this.props.lang}
        style={dark}
        lineNumberStyle={{ color: "#ddd", fontSize: 20 }}
        wrapLines={true}
      >
        {this.props.children.replace(/^\s+|\s+$/g, "")}
      </SyntaxHighlighter>
    )
  }
}
