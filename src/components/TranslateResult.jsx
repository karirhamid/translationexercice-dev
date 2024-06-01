import React from "react";

function TranslateResult({resultText}) {
    return (
        <p className="text-left rtl:text-right text-gray-700 dark:text-gray-900">{resultText}</p>
    )
}

export default TranslateResult;