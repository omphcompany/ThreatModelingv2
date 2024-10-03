# Cybersecurity Threat Modeling Tool

## Overview

The Cybersecurity Threat Modeling Tool is an advanced, interactive web application designed to streamline the process of creating comprehensive security threat models. Built with Next.js and React, this tool implements the PASTA (Process for Attack Simulation and Threat Analysis) framework, providing a structured approach to identifying and analyzing potential security threats in your systems. It integrates with Eraser DiagramGPT for automated diagram generation.

## Features

- **Step-by-Step Guided Process**: Navigate through the seven stages of the PASTA framework with an intuitive user interface.
- **Interactive Form Inputs**: Capture detailed information at each stage of the threat modeling process.
- **Eraser DiagramGPT Integration**: Automatically generate visual threat model diagrams based on your inputs using AI-powered diagramming.
- **Multi-language Support**: Utilize built-in internationalization for a global user base.
- **Responsive Design**: Access the tool seamlessly across various devices and screen sizes.
- **Export Functionality**: Save your threat models and diagrams for easy sharing and presentation.

## Stages of Threat Modeling

1. **Define Business Objectives**: Outline the key business goals and priorities.
2. **Define Technical Scope**: Specify the technical boundaries and components of the system.
3. **Application Decomposition**: Break down the application into its constituent parts for analysis.
4. **Threat Analysis**: Identify potential threats to the system.
5. **Vulnerability Analysis**: Assess vulnerabilities within the identified components.
6. **Attack Modeling**: Model potential attack scenarios and their impacts.
7. **Risk Analysis and Impact**: Evaluate the risks and their potential business impact.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- Eraser.io API key (for diagram generation)

### Installation

1. Clone the repository:
  
   `git clone [https://github.com/your-username/cybersecurity-threat-modeling-tool.git](https://github.com/your-username/cybersecurity-threat-modeling-tool.git)`

2. Navigate to the project directory:

   `cd cybersecurity-threat-modeling-tool`

3. Install dependencies:

   `npm install`

4. Set up environment variables:

   Create a `.env.local` file in the root directory and add your Eraser.io API key:

ERASER_API_KEY=your_api_key_here

5. Run the development server:

   `npm run dev`

6. Open [http://localhost:3000](http://localhost:3000) in your browser to access the tool.

## Usage

1. Start a new threat modeling session by clicking on "Start New Model" on the homepage.
2. Follow the guided process through each of the seven stages, providing detailed information as prompted.
3. Review your inputs at each stage and use the navigation to move between stages as needed.
4. After completing all stages, generate your threat model diagram using Eraser DiagramGPT.
5. Export your full report including the AI-generated diagram.

## Eraser DiagramGPT Integration

This tool leverages Eraser DiagramGPT for automated diagram generation. The integration allows for:

- Natural language input to create diagrams
- Real-time diagram updates based on threat model inputs
- Customizable diagram styles and layouts
- Easy export and sharing of generated diagrams

For more information on Eraser DiagramGPT capabilities, visit the [Eraser.io documentation](https://docs.eraser.io/reference/getting-started).

## Contributing

We welcome contributions to improve the Cybersecurity Threat Modeling Tool. Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- PASTA Framework developers
- Eraser.io for AI-powered diagram generation capabilities
- Next.js and React communities for robust development frameworks

## Support

For support, please open an issue in the GitHub repository or contact our support team using Github email address.

