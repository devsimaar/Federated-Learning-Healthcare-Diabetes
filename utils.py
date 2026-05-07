# import flwr as fl

# from sklearn.metrics import accuracy_score

# from model import load_model
# from utils import load_data


# CLIENT_ID = int(input("Enter client ID (0 or 1): "))
# NUM_CLIENTS = 2

# X_train, X_test, y_train, y_test = load_data(
#     CLIENT_ID,
#     NUM_CLIENTS
# )

# model = load_model()


# class FlowerClient(fl.client.NumPyClient):

#     def get_parameters(self, config):
#         return [model.coef_]

#     def fit(self, parameters, config):

#         model.fit(X_train, y_train)

#         return [model.coef_], len(X_train), {}

#     def evaluate(self, parameters, config):

#         predictions = model.predict(X_test)

#         accuracy = accuracy_score(
#             y_test,
#             predictions
#         )

#         loss = 1 - accuracy

#         return loss, len(X_test), {
#             "accuracy": accuracy
#         }


# fl.client.start_numpy_client(
#     server_address="127.0.0.1:8080",
#     client=FlowerClient(),
# )

import pandas as pd
import torch

from sklearn.model_selection import train_test_split
from torch.utils.data import TensorDataset, DataLoader


def load_data(client_id, num_clients):

    df = pd.read_csv("backend/diabetes.csv")

    X = df.drop("Outcome", axis=1).values
    y = df["Outcome"].values

    X = torch.tensor(X, dtype=torch.float32)
    y = torch.tensor(y, dtype=torch.float32)

    X_train, X_test, y_train, y_test = train_test_split(
        X,
        y,
        test_size=0.2,
        random_state=42
    )

    train_dataset = TensorDataset(
        X_train,
        y_train
    )

    test_dataset = TensorDataset(
        X_test,
        y_test
    )

    trainloader = DataLoader(
        train_dataset,
        batch_size=16,
        shuffle=True
    )

    testloader = DataLoader(
        test_dataset,
        batch_size=16
    )

    return trainloader, testloader