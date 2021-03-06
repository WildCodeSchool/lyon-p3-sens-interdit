import React from "react";
import dayjs from "dayjs";
import { Link } from "gatsby"
import "dayjs/locale/fr";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.locale("fr");
dayjs.extend(localizedFormat);

export default function Result(result) {
    result = result.item;
  const truncateDescription = (str) => {
    return str !== null ? str.substring(0, 300): null;
  }

  const prettify = (date) => {
    return dayjs(date).format('DD MMM YYYY')
  }

  if(result.description === undefined) {
      result.description = '';
  }
  if(result.title === '' || result.title === undefined) {
      return result.title.substring(0, 100)
  }

  return (
      <Link title={result.title} to={result.url}>
          <div className="result">
            <div className="result-category">{result.table}</div>
            <div className="result-title">{result.title}</div>
            <div className="result-description">
                <span>{prettify(result.created_at)}</span> {result.description !== undefined && result.description !== null ? <>-- {truncateDescription(result.description)}...</>:null}
            </div>
          </div>
      </Link>
  );
  }
