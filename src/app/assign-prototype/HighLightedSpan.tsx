import * as React from 'react';
import isEmpty from 'lodash/isEmpty';

interface InnerHTMLProps {
  value: string;
  defaultValue?: string;
  className?: string;
  highlight?: string;
  highlightClassName?: string
}

export const highlightText = (textToHighlight: string, highlight: string, highlightClassName: string) => {
  if (isEmpty(highlight)) {
    return textToHighlight;
  }
  if (isEmpty(textToHighlight)) {
    return '';
  }
  return textToHighlight.toLowerCase().replace(highlight.toLowerCase(), `<span class="${highlightClassName}">${highlight}</span>`)
}

const HighLightedSpan: React.FunctionComponent<InnerHTMLProps> =
  (
    {
      value,
      highlight = "",
      highlightClassName = "highlight"
    }: InnerHTMLProps
  ) =>
    !isEmpty(value) ? (
      <span
        dangerouslySetInnerHTML={{
          __html: highlightText(value, highlight, highlightClassName)
        }}
      />
    ) : null;

export default HighLightedSpan;