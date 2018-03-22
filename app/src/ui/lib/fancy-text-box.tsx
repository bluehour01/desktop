import * as React from 'react'
import { Octicon, OcticonSymbol } from '../octicons'
import { TextBox } from './text-box';

interface IFancyTextBoxProps {
  readonly symbol: OcticonSymbol

  readonly onRef: (textbox: TextBox) => void

  /**
   * An optional className to be applied to the rendered
   * top level element of the component.
   */
  readonly className?: string

  /** The placeholder for the input field. */
  readonly placeholder?: string

  /** The current value of the input field. */
  readonly value?: string

  /** Whether the input field should auto focus when mounted. */
  readonly autoFocus?: boolean

  /** Whether the input field is disabled. */
  readonly disabled?: boolean

  /**
   * Called when the user changes the value in the input field.
   *
   * This differs from the onChange event in that it passes only the new
   * value and not the event itself. Subscribe to the onChange event if you
   * need the ability to prevent the action from occurring.
   *
   * This callback will not be invoked if the callback from onChange calls
   * preventDefault.
   */
  readonly onValueChanged?: (value: string) => void

  /** Called on key down. */
  readonly onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void

  /** The type of the input. Defaults to `text`. */
  readonly type?: 'text' | 'search' | 'password'

  /** The tab index of the input element. */
  readonly tabIndex?: number

  /**
   * Called when focused.
   */
  readonly onFocus?: () => void

  /**
   * Called when focus is lost.
   */
  readonly onBlur?: () => void
}

interface IFancyTextBoxState {

}

export class FancyTextBox extends React.Component<IFancyTextBoxProps, IFancyTextBoxState> {

  public render() {
    return(
      <span>
        <TextBox
          className={this.props.className}
          value={this.props.value}
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
          autoFocus={this.props.autoFocus}
          disabled={this.props.disabled}
          type={this.props.type}
          placeholder={this.props.placeholder}
          onKeyDown={this.props.onKeyDown}
          onValueChanged={this.props.onValueChanged}
          tabIndex={this.props.tabIndex}
          ref={this.props.onRef}
        />
        <Octicon symbol={this.props.symbol} />
      </span>
    )
  }
}
