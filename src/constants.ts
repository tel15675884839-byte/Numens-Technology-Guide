/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Manual {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string;
  prompts: string[];
}

export const MANUALS: Manual[] = [
  {
    id: "system-a",
    name: "Addressable & Wireless System Technology Guide",
    description: "Covers addressable and Wireless Mesh networking, providing reliable and wire-free system configuration guides.",
    url: "https://notebooklm.google.com/notebook/a760d1e7-88d5-45b1-80fb-8874993d0182?usp=sharing",
    icon: "ShieldAlert",
    prompts: ["How to change the device address?", "Mesh network pairing steps."]
  },
  {
    id: "system-b",
    name: "Non-Addressable System Technology Guide",
    description: "Guides for conventional non-addressable systems, offering cost-effective zone monitoring and wiring instructions.",
    url: "https://notebooklm.google.com/notebook/474c4aa9-743d-47b4-b779-cae4257d4aa6?usp=sharing",
    icon: "Wind",
    prompts: ["Zone wiring diagram requirements.", "End-of-line resistor values."]
  },
  {
    id: "system-c",
    name: "Extinguishant Releasing System Technology Guide",
    description: "Focuses on extinguishant releasing systems, detailing detection logic, delay controls, and safe discharge specs.",
    icon: "Flame",
    url: "https://notebooklm.google.com/notebook/49597553-4b7c-4f07-8086-b856777509e9?usp=sharing",
    prompts: ["Discharge delay configuration.", "Abort switch wiring logic."]
  },
  {
    id: "system-d",
    name: "Residential Technology Guide",
    description: "Designed for residential scenarios, providing installation and troubleshooting for standalone and interconnected alarms.",
    icon: "Compass",
    url: "https://notebooklm.google.com/notebook/aa72abdf-a1d6-4c64-94dd-54acbaac4a31?usp=sharing",
    prompts: ["Interconnection wiring guide.", "Battery replacement and test procedure."]
  },
];
