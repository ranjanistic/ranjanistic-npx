#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

// Questions after the card 
const questions = [
    {
        type: "list",
        name: "action",
        message: "Next?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:priyanshuranjan88@gmail.com");
                    console.log("\nDone, see you soon.\n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Good Bye!\n");
                }
            }
        ]
    }
];

// Data for the card
const data = {
    name: chalk.bold.blue("        Priyanshu Ranjan"),
    work: `${chalk.white("Student Developer")} ${chalk
        .hex("#216bf3")
        .bold("")}`,
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("ranjanistic"),
    github: chalk.gray("https://github.com/") + chalk.green("ranjanistic"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("ranjanistic"),
    npx: chalk.blue("npx") + " " + chalk.white("ranjanistic"),

    labelWork: chalk.white.bold("       Work:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelCard: chalk.white.bold("       Card:")
};

// Build the card
const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic(
            "A student, programming enthusiast, designing hobbyist."
        )}`,
        `${chalk.italic("Doing things which really matter.")}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "blue"
    }
);

// Print the card
console.log(me);

// Optional tip to help users use the links
const tip = [
    `Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above.`,
    '',
].join("\n");

// Show the tip 
console.log(tip);

// Ask the Inquirer questions. 
prompt(questions).then(answer => answer.action());