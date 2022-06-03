#
# Copyright (c) Microsoft. All rights reserved.
# Licensed under the MIT license. See LICENSE file in the project.
#

from typing import List

import pandas as pd

from data_wrangling_components.table_store import TableContainer


def difference(source: TableContainer, others: List[TableContainer]):
    input_table = source.table
    others = [other.table for other in others]
    others = pd.concat(others)

    output = input_table.merge(others, how="left", indicator=True)
    output = output[output["_merge"] == "left_only"]
    output = output.drop("_merge", axis=1)

    return TableContainer(table=output)
