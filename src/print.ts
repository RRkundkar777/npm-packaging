/** Sample test package for deployment */

import chalk from "chalk";
 

export default class Printer{
    /**
     * Prints blue
     * @param void 
     * @returns void
     */
    bluePrint(){
        console.log(chalk.blue('Hello World!'))
    }
}