import { TimelineConnector,
    TimelineRoot,
    TimelineContent,
    TimelineItem,
    TimelineTitle
} from "../ui/timeline";
import { VStack } from "@chakra-ui/react";
import { GiGraduateCap } from "react-icons/gi";
import { FaWrench, FaEbay, FaNetworkWired, FaAmazon } from "react-icons/fa";
import { GrOracle } from "react-icons/gr";

export const Timeline = () => {
    return (
        <VStack pt={5}>
        <TimelineRoot size="lg" hideBelow="md">
            <TimelineItem>
                <TimelineContent width="auto">
                    <TimelineTitle whiteSpace="nowrap">Dec 2015</TimelineTitle>
                </TimelineContent>
                <TimelineConnector>
                    <GiGraduateCap />
                </TimelineConnector>
                <TimelineContent>
                    <TimelineTitle>
                        Graduated from CUNY Baruch College
                    </TimelineTitle>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineContent width="auto">
                    <TimelineTitle whiteSpace="nowrap">Apr 2016</TimelineTitle>
                </TimelineContent>
                <TimelineConnector>
                    <FaWrench />
                </TimelineConnector>
                <TimelineContent>
                    <TimelineTitle>
                        Completed program at MediaMath
                    </TimelineTitle>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineContent width="auto">
                    <TimelineTitle whiteSpace="nowrap">May 2017</TimelineTitle>
                </TimelineContent>
                <TimelineConnector>
                    <FaEbay />
                </TimelineConnector>
                <TimelineContent>
                    <TimelineTitle>
                        Completed 1 year at eBay 
                    </TimelineTitle>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineContent width="auto">
                    <TimelineTitle whiteSpace="nowrap">Jun 2017</TimelineTitle>
                </TimelineContent>
                <TimelineConnector>
                    <GrOracle />
                </TimelineConnector>
                <TimelineContent>
                    <TimelineTitle>
                        Joined Oracle
                    </TimelineTitle>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineContent width="auto">
                    <TimelineTitle whiteSpace="nowrap">Jan 2019</TimelineTitle>
                </TimelineContent>
                <TimelineConnector>
                    <FaNetworkWired />
                </TimelineConnector>
                <TimelineContent>
                    <TimelineTitle>
                        Transitioned into Program Management at Oracle
                    </TimelineTitle>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineContent width="auto">
                    <TimelineTitle whiteSpace="nowrap">May 2020</TimelineTitle>
                </TimelineContent>
                <TimelineConnector>
                    <FaAmazon />
                </TimelineConnector>
                <TimelineContent>
                    <TimelineTitle>
                        Joined Amazon
                    </TimelineTitle>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineContent width="auto">
                    <TimelineTitle whiteSpace="nowrap">Mar 2022</TimelineTitle>
                </TimelineContent>
                <TimelineConnector>
                    <GrOracle />
                </TimelineConnector>
                <TimelineContent>
                    <TimelineTitle>
                        Rejoined Oracle
                    </TimelineTitle>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineContent width="auto">
                    <TimelineTitle whiteSpace="nowrap">Sep 2023</TimelineTitle>
                </TimelineContent>
                <TimelineConnector>
                    <GrOracle />
                </TimelineConnector>
                <TimelineContent>
                    <TimelineTitle>
                        Promoted to Principal Program Manager at Oracle
                    </TimelineTitle>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineContent width="auto">
                    <TimelineTitle whiteSpace="nowrap">Jul 2024</TimelineTitle>
                </TimelineContent>
                <TimelineConnector>
                    <GrOracle />
                </TimelineConnector>
                <TimelineContent>
                    <TimelineTitle>
                        Transitioned to Health Data Intelligence division at Oracle
                    </TimelineTitle>
                </TimelineContent>
            </TimelineItem>
        </TimelineRoot>
        </VStack>
    );
};