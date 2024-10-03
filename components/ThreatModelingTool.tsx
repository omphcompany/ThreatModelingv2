'use client'

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRightIcon, DownloadIcon, NetworkIcon } from 'lucide-react';
import eraser from '../config/eraserConfig';

// Mock function to simulate Eraser API call
const generateEraserDiagram = async (formData: any) => {
    console.log("Generating diagram with data:", formData);
    try {
        const { data } = await eraser.generateDiagramFromPrompt({ prompt: formData });
        return data.diagramId;
    } catch (err) {
        console.error("Error generating diagram:", err);
        throw err;
    }
}

const EraserEmbed = ({ diagramId }: { diagramId: string }) => {
    return (
        <div className="eraser-embed" style={{ width: '100%', height: '600px' }}>
            <iframe
                src={`https://eraser.io/documents/embeddedchart/${diagramId}`}
                width="100%"
                height="100%"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default function ThreatModelingTool() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        businessObjectives: '',
        technicalScope: '',
        applicationDecomposition: '',
        threatAnalysis: '',
        vulnerabilityAnalysis: '',
        attackModeling: '',
        riskAnalysis: '',
    });
    const [diagramId, setDiagramId] = useState('');
    const [isGeneratingDiagram, setIsGeneratingDiagram] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleNext = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const handlePrevious = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const handleGenerateDiagram = async () => {
        setIsGeneratingDiagram(true);
        try {
            const newDiagramId = await generateEraserDiagram(formData);
            setDiagramId(newDiagramId);
            setStep(8);
        } catch (error) {
            console.error("Error generating diagram:", error);
            alert("There was an error generating the diagram. Please try again.");
        } finally {
            setIsGeneratingDiagram(false);
        }
    };

    const handleFinish = () => {
        setStep(1);
        setFormData({
            businessObjectives: '',
            technicalScope: '',
            applicationDecomposition: '',
            threatAnalysis: '',
            vulnerabilityAnalysis: '',
            attackModeling: '',
            riskAnalysis: '',
        });
        setDiagramId('');
    };

    const exportToPDF = () => {
        alert("PDF export functionality would be implemented here.");
    };

    const exportToPPT = () => {
        alert("PowerPoint export functionality would be implemented here.");
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <Card>
                        <CardHeader>
                            <CardTitle>Step 1: Define Business Objectives</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Label htmlFor="businessObjectives">Business Objectives</Label>
                            <Textarea
                                id="businessObjectives"
                                name="businessObjectives"
                                value={formData.businessObjectives}
                                onChange={handleInputChange}
                            />
                        </CardContent>
                        <CardFooter>
                            <Button onClick={handleNext}>Next <ChevronRightIcon /></Button>
                        </CardFooter>
                    </Card>
                );
            // Add more cases for each step
            default:
                return null;
        }
    };

    return (
        <div>
            <Tabs>
                <TabsList>
                    <TabsTrigger>Step {step}</TabsTrigger>
                </TabsList>
            </Tabs>
            {isGeneratingDiagram
                ? <p>Generating diagram...</p>
                : (diagramId ? <EraserEmbed diagramId={diagramId} /> : renderStep())
            }
            {/* Additional UI components for exporting */}
            <div>
                <Button onClick={exportToPDF}><DownloadIcon /> Export to PDF</Button>
                <Button onClick={exportToPPT}><NetworkIcon /> Export to PPT</Button>
            </div>
        </div>
    );
}