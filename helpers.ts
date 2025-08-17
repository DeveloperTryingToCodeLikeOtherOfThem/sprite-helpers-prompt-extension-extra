//% blockNamespace=images
namespace helpers {
    //% blockId="prompt_for_text" block="prompt for text $maxLength $numbersOnly"
    //% maxLength.min=1
    //% maxLength.max=24
    export declare function _promptForText(maxLength: number, numbersOnly: number): void;
      //% blockId="get_text_prompt_string" block="get text prompt string"
    export declare function _getTextPromptString(): string;
       //% blockId="get_text_prompt_selection_start" block="get text prompt selection start"
    export declare function _getTextPromptSelectionStart(): number;
      //% blockId="get_text_prompt_selection_end" block="get text prompt selection end"
    export declare function _getTextPromptSelectionEnd(): number;
}

