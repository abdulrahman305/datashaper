#
# Copyright (c) Microsoft. All rights reserved.
# Licensed under the MIT license. See LICENSE file in the project.
#

from typing import Dict

from ...table_store import TableContainer
from .verb_input import VerbInput


class RecodeMap(dict):
    def __missing__(self, key):
        return key


def recode(input: VerbInput, to: str, column: str, mapping: Dict):
    mapping = RecodeMap(mapping)

    input_table = input.get_input()

    output = input_table.copy()
    output[to] = output[column].map(mapping)
    return TableContainer(table=output)
